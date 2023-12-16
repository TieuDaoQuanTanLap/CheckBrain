document.addEventListener("DOMContentLoaded", function () {
    const ngayMucTieu = new Date("January 1, 2024 00:00:00");
    const khoangCachThoiGianId = setInterval(capNhatDemNguoc, 1000);
    capNhatDemNguoc();

    function capNhatDemNguoc() {
        const ngayHienTai = new Date();
        const khoangCachThoiGian = ngayMucTieu - ngayHienTai;
        const ngay = Math.floor(khoangCachThoiGian / (1000 * 60 * 60 * 24));
        const gio = Math.floor((khoangCachThoiGian % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const phut = Math.floor((khoangCachThoiGian % (1000 * 60 * 60)) / (1000 * 60));
        const giay = Math.floor((khoangCachThoiGian % (1000 * 60)) / 1000);

        document.getElementById("months").innerHTML = ngayHienTai.toLocaleString('en-us', { month: 'short' });
        document.getElementById("days").innerHTML = ngay < 10 ? "0" + ngay : ngay;
        document.getElementById("years").innerHTML = ngayHienTai.getFullYear();

        document.getElementById("hours").innerHTML = gio < 10 ? "0" + gio : gio;
        document.getElementById("minutes").innerHTML = phut < 10 ? "0" + phut : phut;
        document.getElementById("seconds").innerHTML = giay < 10 ? "0" + giay : giay;

        if (khoangCachThoiGian <= 0) {
            clearInterval(khoangCachThoiGianId);
            document.getElementById("months").innerHTML = "Th01";
            document.getElementById("days").innerHTML = "01";
            document.getElementById("years").innerHTML = "2024";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            alert("Chúc mừng Năm mới 2024!");
        }
    }
});