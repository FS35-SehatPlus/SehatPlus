async function fetchData() {
  try {
    const response = await fetch(
      "https://652e1f17f9afa8ef4b280f92.mockapi.io/doctors"
    );
    if (response.ok) {
      const data = await response.json();
      const doctorListContainer = document.getElementById("doctorList");

      data.forEach((doctor) => {
        const doctorElement = document.createElement("div");
        doctorElement.className = "col-sm-6 col-lg-4 mx-auto";
        doctorElement.innerHTML = `
            <div class="box">
              <div class="img-box">
                <img src="${doctor.image}" alt="">
              </div>
              <div class="detail-box">
                <div class="social_box btn-janji">
                  <a href="pilihjadwal.html?doctorId=${doctor.id}">BUAT JANJI <i class="fa fa-arrow-right ml-3"></i></a>
                </div>
                <h5 style="font-weight: 900; color: #ffffff;">${doctor.name}</h5>
                <h6 style="font-weight: 600; color: #ffffff;">${doctor.spesialisasi}</h6>
              </div>
            </div>
          `;
        doctorListContainer.appendChild(doctorElement);
      });
    } else {
      console.error("Gagal mengambil data. Status:", response.status);
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

fetchData();
