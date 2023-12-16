const count = document.getElementById("count");
count.onclick = function() {
    function SoNguyenTo(num) {
        if (num < 2) {
            return false;
        } else {
            for (let i = 2; i <= num / 2; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    function TinhTong() {
        const a = parseInt(document.getElementById("numA").value);
        const b = parseInt(document.getElementById("numB").value);
        const numArr = document.querySelector(".numArr");
        const sum = document.querySelector(".sum");

        let SoKhoang = [];
        let Tong = 0;

        for (let i = a; i <= b; i++) {
            if (SoNguyenTo(i)) {
                SoKhoang.push(i);
                Tong = Tong + i;
            }
        }
        numArr.innerHTML = `${SoKhoang.join(", ")}`;
        sum.innerHTML = Tong;
    }

    TinhTong()
};
