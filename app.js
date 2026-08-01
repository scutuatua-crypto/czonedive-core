console.log("🌊 Boss WhaleTrucker triggers governance 🌊");

// USUAL Token Contract Addresses (Ethereum Mainnet)
const USUAL_TOKEN_ADDRESS = "0xC4441c2BE5d8fA8126822B929C0B81Ea0DE38E32";
const VESTING_CONTRACT_ADDRESS = "YOUR_VESTING_CONTRACT_HERE"; // ⚠️ ต้องหา address นี้

// Simplified ABI for claim function
const VESTING_ABI = [
    "function claim() external",
    "function getClaimableAmount(address user) external view returns (uint256)",
    "function balanceOf(address account) external view returns (uint256)"
];

const USUAL_TOKEN_ABI = [
    "function balanceOf(address account) external view returns (uint256)",
    "function decimals() external view returns (uint8)"
];

let provider;
let signer;
let userAddress;
let vestingContract;
let tokenContract;

// DOM Elements
const connectBtn = document.getElementById('connectBtn');
const claimBtn = document.getElementById('claimBtn');
const walletAddressEl = document.getElementById('walletAddress');
const statsSection = document.getElementById('statsSection');
const loadingSection = document.getElementById('loadingSection');
const errorSection = document.getElementById('errorSection');
const successSection = document.getElementById('successSection');

// Mock data for unlock schedule
const unlockSchedule = [
    { date: "Dec 24, 2025", amount: "1.51M USUAL", status: "UNLOCKING" },
    { date: "Dec 25, 2025", amount: "1.51M USUAL", status: "UPCOMING" }
];

// Connect Wallet
connectBtn.addEventListener('click', async () => {
    try {
        showLoading(true);
        hideError();
        
        if (typeof window.ethereum === 'undefined') {
            throw new Error('MetaMask is not installed! Please install MetaMask first.');
        }
        
        // Request account access
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        
        userAddress = accounts[0];
        
        // Initialize provider and signer
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        
        // Initialize contracts
        vestingContract = new ethers.Contract(VESTING_CONTRACT_ADDRESS, VESTING_ABI, signer);
        tokenContract = new ethers.Contract(USUAL_TOKEN_ADDRESS, USUAL_TOKEN_ABI, provider);
        
        // Update UI
        walletAddressEl.textContent = `Connected: ${formatAddress(userAddress)}`;
        walletAddressEl.style.display = 'block';
        connectBtn.style.display = 'none';
        
        // Load data
        await loadUserData();
        
        showLoading(false);
        statsSection.style.display = 'block';
        
    } catch (error) {
        showLoading(false);
        showError(error.message);
        console.error('Connection error:', error);
    }
});

// Load User Data
async function loadUserData() {
    try {
        // Get token balance
        const balance = await tokenContract.balanceOf(userAddress);
        const decimals = await tokenContract.decimals();
        const formattedBalance = ethers.utils.formatUnits(balance, decimals);
        
        // Get claimable amount (if contract supports it)
        let claimableAmount = 0;
        try {
            const claimable = await vestingContract.getClaimableAmount(userAddress);
            claimableAmount = ethers.utils.formatUnits(claimable, decimals);
        } catch (e) {
            console.log('Claimable function not available:', e.message);
        }
        
        // Mock market data (you can replace with real API call)
        const marketRate = 0.0264;
        const netWorth = parseFloat(formattedBalance) * marketRate;
        
        // Update UI
        document.getElementById('totalHolding').textContent = formatNumber(formattedBalance);
        document.getElementById('marketRate').textContent = marketRate.toFixed(4);
        document.getElementById('netWorth').textContent = netWorth.toFixed(2);
        document.getElementById('claimable').textContent = formatNumber(claimableAmount);
        
        // Enable claim button if there's claimable amount
        if (parseFloat(claimableAmount) > 0) {
            claimBtn.disabled = false;
        }
        
        // Populate unlock schedule
        populateUnlockSchedule();
        
    } catch (error) {
        showError('Error loading data: ' + error.message);
        console.error('Load data error:', error);
    }
}

// Claim Tokens
claimBtn.addEventListener('click', async () => {
    try {
        showLoading(true);
        hideError();
        hideSuccess();
        claimBtn.disabled = true;
        
        // Call claim function
        const tx = await vestingContract.claim();
        
        showSuccess(`Transaction submitted! Hash: ${tx.hash}`);
        
        // Wait for confirmation
        await tx.wait();
        
        showSuccess('🎉 Tokens claimed successfully! Refreshing data...');
        
        // Reload data
        await loadUserData();
        
        showLoading(false);
        
    } catch (error) {
        showLoading(false);
        claimBtn.disabled = false;
        showError('Claim failed: ' + error.message);
        console.error('Claim error:', error);
    }
});

// Populate unlock schedule table
function populateUnlockSchedule() {
    const tbody = document.getElementById('unlockSchedule');
    tbody.innerHTML = '';
    
    unlockSchedule.forEach(item => {
        const row = document.createElement('tr');
        const statusClass = item.status === 'UNLOCKING' ? 'status-unlocking' : 'status-upcoming';
        
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.amount}</td>
            <td class="${statusClass}">⚠️ ${item.status}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Helper functions
function formatAddress(address) {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}

function formatNumber(num) {
    const n = parseFloat(num);
    if (n >= 1000000) {
        return (n / 1000000).toFixed(2) + 'M';
    } else if (n >= 1000) {
        return (n / 1000).toFixed(2) + 'K';
    }
    return n.toFixed(2);
}

function showLoading(show) {
    loadingSection.style.display = show ? 'block' : 'none';
}

function showError(message) {
    errorSection.textContent = '❌ ' + message;
    errorSection.style.display = 'block';
}

function hideError() {
    errorSection.style.display = 'none';
}

function showSuccess(message) {
    successSection.textContent = '✅ ' + message;
    successSection.style.display = 'block';
}

function hideSuccess() {
    successSection.style.display = 'none';
}

// Listen for account changes
if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            // User disconnected
            location.reload();
        } else {
            // User switched account
            location.reload();
        }
    });
    
    window.ethereum.on('chainChanged', () => {
        location.reload();
    });
}

console.log("🧠 Boss WhaleTrucker Governance Active!");
