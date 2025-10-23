//Changes colour of parking bay without payment being made

document.addEventListener("DOMContentLoaded", () => {
  const spaces = document.querySelectorAll(".parking-space");
  const occupiedCount = document.querySelector(".occupied .count");
  const availableCount = document.querySelector(".available .count");

  // Load saved status from localStorage
  const savedStatus = JSON.parse(localStorage.getItem("parkingStatus")) || {};

  spaces.forEach((btn) => {
    const id = btn.textContent;

    // Restore previous color
    if (savedStatus[id]) {
      btn.dataset.status = savedStatus[id];
      btn.style.backgroundColor = getColor(savedStatus[id]);
    } else {
      btn.style.backgroundColor = "grey";
    }

    // Click to change color and update counts
    btn.addEventListener("click", () => {
      const current = btn.dataset.status;
      const next = current === "grey" ? "red" : "grey"; // toggle
      btn.dataset.status = next;
      btn.style.backgroundColor = getColor(next);
      savedStatus[id] = next;
      localStorage.setItem("parkingStatus", JSON.stringify(savedStatus));
      updateCounts();
    });
  });

  // Helper to pick color based on status
  function getColor(status) {
    if (status === "red") return "red";
    return "grey";
  }

  // Update occupied/available counts
  function updateCounts() {
    const total = spaces.length;
    const occupied = Object.values(savedStatus).filter(s => s === "red").length;
    occupiedCount.textContent = occupied;
    availableCount.textContent = total - occupied;
  }

  // Initial update
  updateCounts();
});












/* Should allow user to make payment first before making parking unavilable. */

/*const parkingLot = document.getElementById('parkingLot');
const occupiedCount = document.getElementById('occupiedCount');
const availableCount = document.getElementById('availableCount');

const rows = ['A', 'B'];
const cols = 10;

// load saved statuses (from localStorage for now)
const saved = JSON.parse(localStorage.getItem('parkingStatus')) || {};

// create parking buttons
rows.forEach(row => {
  for (let i = 1; i <= cols; i++) {
    const bayId = `${row}${i}`;
    const btn = document.createElement('button');
    btn.textContent = bayId;

    if (saved[bayId] === 'unavailable') {
      btn.classList.add('unavailable');
    }

    btn.addEventListener('click', () => {
      if (!btn.classList.contains('unavailable')) {
        // store selected bay and go to payment page
        localStorage.setItem('selectedBay', bayId);
        window.location.href = 'payments.html';
      }
    });

    parkingLot.appendChild(btn);
  }
});

// update counts
function updateCounts() {
  const total = rows.length * cols;
  const occupied = Object.values(saved).filter(s => s === 'unavailable').length;
  occupiedCount.textContent = occupied;
  availableCount.textContent = total - occupied;
}
updateCounts();*/











































/*const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// SQL Server connection
const dbConfig = {
  user: 'NAZNEEN1117\nazne',
  password: 'Nazneen8',
  server: 'NAZNEEN1117/SQLEXPRESS', 
  database: 'ParkingLotDB',
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

//  Get all parking bays
app.get('/bays', async (req, res) => {
  try {
    await sql.connect(dbConfig);
    const result = await sql.query('SELECT Bay_No, SlotsAvailable FROM ParkingBay');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching bays:', err);
    res.status(500).send('Database error');
  }
});

// Update slot availability
app.put('/bays/:bayNo', async (req, res) => {
  const { bayNo } = req.params;
  const { slotsAvailable } = req.body;

  try {
    await sql.connect(dbConfig);
    await sql.query`
      UPDATE ParkingBay
      SET SlotsAvailable = ${slotsAvailable}
      WHERE Bay_No = ${bayNo}`;
    res.send('Updated successfully');
  } catch (err) {
    console.error('Error updating bay:', err);
    res.status(500).send('Database error');
  }
});

app.listen(3000, () => console.log('✅ Server running on http://localhost:3000')); */
