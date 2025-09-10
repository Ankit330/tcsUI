document.getElementById("insuranceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const vehicleNo = e.target[0].value;
  const vehicleType = e.target[1].value;
  const customerName = e.target[2].value;
  const engineNo = e.target[3].value;
  const chassisNo = e.target[4].value;
  const phoneNo = e.target[5].value;
  const premiumAmt = e.target[6].value;
  const insuranceType = e.target[7].value;
  const fromDate = e.target[8].value;
  const toDate = e.target[9].value;
  const underwriterId = e.target[10].value;

  console.log("Insurance Created:", {
    vehicleNo, vehicleType, customerName, engineNo, chassisNo, phoneNo, premiumAmt, insuranceType, fromDate, toDate, underwriterId
  });

  document.getElementById("message").textContent = 
    `✅ Vehicle Insurance for ${customerName} (Vehicle No: ${vehicleNo}) has been created successfully!`;

  e.target.reset();
});
