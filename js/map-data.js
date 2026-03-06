/* ============================================
   Map Data - Ahilya Bai's Contributions
   ~40 historically verified locations
   ============================================ */

const mapPins = [
  // === TEMPLES ===
  {
    name: "Kashi Vishwanath Temple",
    lat: 25.3109, lng: 83.0107,
    type: "temple",
    city: "Varanasi", state: "Uttar Pradesh",
    description: "Rebuilt by Ahilya Bai in 1780. One of the twelve Jyotirlingas and one of the holiest Hindu temples. Considered her greatest achievement.",
    year: 1780
  },
  {
    name: "Vishnupad Temple",
    lat: 24.7497, lng: 84.9872,
    type: "temple",
    city: "Gaya", state: "Bihar",
    description: "The current structure was built by Ahilya Bai Holkar in 1787. An important pilgrimage site with the sacred footprint of Lord Vishnu.",
    year: 1787
  },
  {
    name: "Somnath Temple",
    lat: 20.8880, lng: 70.4014,
    type: "temple",
    city: "Somnath", state: "Gujarat",
    description: "One of the twelve Jyotirlingas, renovated and supported by Ahilya Bai. She helped restore this temple after centuries of destruction.",
    year: 1783
  },
  {
    name: "Mamaleshwar Mahadev Temple",
    lat: 22.2425, lng: 76.1493,
    type: "temple",
    city: "Omkareshwar", state: "Madhya Pradesh",
    description: "Along with Amaleshwar, Trambakeshwar, and Gauri Somnath temples at this sacred island on the Narmada river.",
    year: 1775
  },
  {
    name: "Shri Ram Temple, Panchavati",
    lat: 20.0063, lng: 73.7890,
    type: "temple",
    city: "Nashik", state: "Maharashtra",
    description: "Built along with Gora Mahadev Temple and Vishweshwar Temple. A significant contribution to the Panchavati pilgrimage circuit.",
    year: 1782
  },
  {
    name: "Shree Vaidyanath Temple",
    lat: 18.8436, lng: 76.5337,
    type: "temple",
    city: "Parli Vaijnath", state: "Maharashtra",
    description: "One of the twelve Jyotirlingas, restored with patronage from Ahilya Bai Holkar.",
    year: 1776
  },
  {
    name: "Shri Ram Temple, Pandharpur",
    lat: 17.6786, lng: 75.3249,
    type: "temple",
    city: "Pandharpur", state: "Maharashtra",
    description: "Temple and dharamshala constructed for the Varkari pilgrimage tradition.",
    year: 1778
  },
  {
    name: "Rewaleshwar Mahadev Temple",
    lat: 14.5479, lng: 74.3188,
    type: "temple",
    city: "Gokarna", state: "Karnataka",
    description: "Built along with the Holkar Wada, garden, and Garibkhana (house for the poor) in this coastal pilgrimage town.",
    year: 1785
  },
  {
    name: "Shri Ramchandra Temple",
    lat: 19.8048, lng: 85.8312,
    type: "temple",
    city: "Jagannath Puri", state: "Odisha",
    description: "Constructed with a dharamshala and garden for pilgrims visiting the sacred Jagannath temple.",
    year: 1779
  },
  {
    name: "Vishwanath & Kedarnath Temples",
    lat: 30.9946, lng: 78.9401,
    type: "temple",
    city: "Gangotri", state: "Uttarakhand",
    description: "Built four temples: Vishwanath, Bhairavnath, Annapurna, and Kedarnath at the source of the holy Ganges.",
    year: 1781
  },
  {
    name: "Shreenathji Temple",
    lat: 30.1070, lng: 78.2968,
    type: "temple",
    city: "Rishikesh", state: "Uttarakhand",
    description: "Constructed along with Goverdhanath temple and other shrines in this Himalayan pilgrimage center.",
    year: 1784
  },
  {
    name: "Malhar Gautmeshwar Temple",
    lat: 18.2676, lng: 73.9806,
    type: "temple",
    city: "Jejuri", state: "Maharashtra",
    description: "Multiple temples including Martand Temple, Janai Mahadev, and the creation of Malhar lakes.",
    year: 1777
  },
  {
    name: "Siddhanath Temple",
    lat: 22.4818, lng: 77.0971,
    type: "temple",
    city: "Handiya", state: "Madhya Pradesh",
    description: "Temple with ghat and dharamshala, strengthening the pilgrimage infrastructure in Malwa.",
    year: 1772
  },
  {
    name: "Shri Ramchandra Temple",
    lat: 25.2029, lng: 80.8832,
    type: "temple",
    city: "Chitrakoot", state: "Uttar Pradesh",
    description: "Pranprathisha (consecration) of Shri Ramchandra at this sacred site associated with Lord Rama's exile.",
    year: 1786
  },
  {
    name: "Shri Ganeshwar Temple",
    lat: 20.0258, lng: 75.1790,
    type: "temple",
    city: "Ellora", state: "Maharashtra",
    description: "Built near the famous Ellora caves and the Ghrishneshwar Jyotirlinga.",
    year: 1774
  },
  {
    name: "Maheshwar Temples Complex",
    lat: 22.1767, lng: 75.5886,
    type: "temple",
    city: "Maheshwar", state: "Madhya Pradesh",
    description: "Her capital city, where she built hundreds of temples, the Ahilya Fort complex, and established the seat of the Holkar dynasty.",
    year: 1767
  },
  {
    name: "Temples at Ayodhya",
    lat: 26.7922, lng: 82.1998,
    type: "temple",
    city: "Ayodhya", state: "Uttar Pradesh",
    description: "Contributed to temple construction and maintenance at the birthplace of Lord Rama.",
    year: 1783
  },
  {
    name: "Temples at Mathura",
    lat: 27.4925, lng: 77.6737,
    type: "temple",
    city: "Mathura", state: "Uttar Pradesh",
    description: "Supported temples and pilgrimage infrastructure at the birthplace of Lord Krishna.",
    year: 1784
  },
  {
    name: "Temples at Dwarka",
    lat: 22.2376, lng: 68.9674,
    type: "temple",
    city: "Dwarka", state: "Gujarat",
    description: "Contributed to the maintenance and enhancement of temples at this western-most Char Dham site.",
    year: 1782
  },
  {
    name: "Temples at Kanchi",
    lat: 12.8342, lng: 79.7036,
    type: "temple",
    city: "Kanchipuram", state: "Tamil Nadu",
    description: "Extended her patronage to the temples of this ancient south Indian pilgrimage center.",
    year: 1785
  },
  {
    name: "Temples at Rameswaram",
    lat: 9.2881, lng: 79.3174,
    type: "temple",
    city: "Rameswaram", state: "Tamil Nadu",
    description: "Supported the Ramanathaswamy Temple, the southernmost point of her vast philanthropic reach.",
    year: 1786
  },
  {
    name: "Temples at Badrinath",
    lat: 30.7433, lng: 79.4938,
    type: "temple",
    city: "Badrinath", state: "Uttarakhand",
    description: "Contributed to the upkeep and pilgrim facilities at this Himalayan Char Dham site.",
    year: 1780
  },
  {
    name: "Bhanpura Temples",
    lat: 24.5128, lng: 75.7483,
    type: "temple",
    city: "Bhanpura", state: "Madhya Pradesh",
    description: "Built 9 temples and a dharamshala in this town in the Malwa region.",
    year: 1773
  },
  {
    name: "Temple & Kund at Bharatpur",
    lat: 27.2152, lng: 77.4890,
    type: "temple",
    city: "Bharatpur", state: "Rajasthan",
    description: "Constructed a temple, dharamshala, and kund (step-well) in this Rajasthani city.",
    year: 1781
  },
  {
    name: "Mahadev Temple, Nemisharanya",
    lat: 26.9500, lng: 80.0500,
    type: "temple",
    city: "Nemisharanya", state: "Uttar Pradesh",
    description: "Built Mahadev Madi temple, dharamshala, and Go-ghat at this ancient forest pilgrimage site.",
    year: 1788
  },

  // === GHATS ===
  {
    name: "Dashashwamedh Ghat",
    lat: 25.3046, lng: 83.0107,
    type: "ghat",
    city: "Varanasi", state: "Uttar Pradesh",
    description: "One of the most famous ghats in Varanasi, developed under Ahilya Bai's patronage. Site of the daily Ganga Aarti.",
    year: 1780
  },
  {
    name: "Ahilya Ghat",
    lat: 25.3020, lng: 83.0090,
    type: "ghat",
    city: "Varanasi", state: "Uttar Pradesh",
    description: "Named after the queen herself, this ghat on the Ganges stands as a permanent tribute to her devotion to Kashi.",
    year: 1778
  },
  {
    name: "Maheshwar Ghats",
    lat: 22.1780, lng: 75.5870,
    type: "ghat",
    city: "Maheshwar", state: "Madhya Pradesh",
    description: "The spectacular ghats on the Narmada river — her most remarkable creation. The temple and ghats are the real showpieces of her reign.",
    year: 1770
  },
  {
    name: "Kushawarth Ghat",
    lat: 29.9457, lng: 78.1642,
    type: "ghat",
    city: "Haridwar", state: "Uttarakhand",
    description: "Built along with a large dharamshala at this holy city on the Ganges.",
    year: 1782
  },
  {
    name: "Ram Ghat, Panchavati",
    lat: 20.0050, lng: 73.7870,
    type: "ghat",
    city: "Nashik", state: "Maharashtra",
    description: "Constructed along with temples and a dharamshala at this sacred bathing ghat on the Godavari.",
    year: 1782
  },
  {
    name: "Go-Ghat, Nemisharanya",
    lat: 26.9480, lng: 80.0480,
    type: "ghat",
    city: "Nemisharanya", state: "Uttar Pradesh",
    description: "A ghat for cattle and pilgrims at this ancient forest pilgrimage site.",
    year: 1788
  },
  {
    name: "Ghat at Handiya",
    lat: 22.4800, lng: 77.0960,
    type: "ghat",
    city: "Handiya", state: "Madhya Pradesh",
    description: "Built alongside the Siddhanath Temple to serve the pilgrims of the Narmada valley.",
    year: 1772
  },

  // === DHARMSHALAS ===
  {
    name: "Haridwar Dharamshala",
    lat: 29.9550, lng: 78.1680,
    type: "dharmshala",
    city: "Haridwar", state: "Uttarakhand",
    description: "A large dharamshala providing free shelter to pilgrims visiting the holy city on the Ganges.",
    year: 1782
  },
  {
    name: "Pandharpur Dharamshala",
    lat: 17.6800, lng: 75.3260,
    type: "dharmshala",
    city: "Pandharpur", state: "Maharashtra",
    description: "Rest house for the Varkari pilgrims who walk hundreds of miles to worship Lord Vitthal.",
    year: 1778
  },
  {
    name: "Puri Dharamshala & Garden",
    lat: 19.8060, lng: 85.8320,
    type: "dharmshala",
    city: "Jagannath Puri", state: "Odisha",
    description: "Dharamshala with a garden for pilgrims visiting the sacred Jagannath temple.",
    year: 1779
  },
  {
    name: "Nemisharanya Dharamshala",
    lat: 26.9520, lng: 80.0520,
    type: "dharmshala",
    city: "Nemisharanya", state: "Uttar Pradesh",
    description: "Rest house for pilgrims at the ancient Naimisharanya forest, one of India's oldest pilgrimage sites.",
    year: 1788
  },
  {
    name: "Bhanpura Dharamshala",
    lat: 24.5150, lng: 75.7500,
    type: "dharmshala",
    city: "Bhanpura", state: "Madhya Pradesh",
    description: "Built alongside 9 temples to serve the pilgrims and travelers of the Malwa region.",
    year: 1773
  },
  {
    name: "Bharatpur Dharamshala",
    lat: 27.2170, lng: 77.4900,
    type: "dharmshala",
    city: "Bharatpur", state: "Rajasthan",
    description: "Rest house constructed along with a temple and kund for travelers in Rajasthan.",
    year: 1781
  },

  // === WELLS ===
  {
    name: "Omkareshwar Wells",
    lat: 22.2440, lng: 76.1510,
    type: "well",
    city: "Omkareshwar", state: "Madhya Pradesh",
    description: "Wells constructed along with temples and dharamshalas at this sacred island on the Narmada.",
    year: 1775
  },
  {
    name: "Maheshwar Wells",
    lat: 22.1790, lng: 75.5900,
    type: "well",
    city: "Maheshwar", state: "Madhya Pradesh",
    description: "Multiple wells constructed throughout the capital to ensure clean water supply for all citizens.",
    year: 1770
  },
  {
    name: "Bharatpur Kund",
    lat: 27.2140, lng: 77.4880,
    type: "well",
    city: "Bharatpur", state: "Rajasthan",
    description: "A step-well (kund) built alongside a temple and dharamshala in this Rajasthani city.",
    year: 1781
  }
];
