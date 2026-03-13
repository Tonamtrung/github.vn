document.addEventListener('DOMContentLoaded', () => {
    const thiep = document.getElementById('thiep');
    
    // --- CẤU HÌNH NHẠC PHÁT NGAY ---
    const nhac = new Audio("music/Kiss the Rain.mp3");
    nhac.loop = true;
    nhac.volume = 0.5;

    // Hàm kích hoạt nhạc khi có tương tác đầu tiên
    const playMusic = () => {
        nhac.play().then(() => {
            // Sau khi nhạc đã phát thành công, gỡ bỏ các sự kiện nghe để tránh tốn tài nguyên
            document.removeEventListener('click', playMusic);
            document.removeEventListener('touchstart', playMusic);
            document.removeEventListener('scroll', playMusic);
        }).catch(e => console.log("Chờ tương tác từ người dùng..."));
    };

    // Lắng nghe mọi tương tác của Thầy/Cô để phát nhạc luôn
    document.addEventListener('click', playMusic);
    document.addEventListener('touchstart', playMusic); // Cho điện thoại
    document.addEventListener('scroll', playMusic);     // Khi cuộn trang

    // Mở/Đóng thiệp (vẫn giữ nguyên để Thầy/Cô xem thư)
    thiep.addEventListener('click', () => {
        thiep.classList.toggle('open');
    });

    // --- GIỮ NGUYÊN PHẦN HIỆU ỨNG RƠI BÊN DƯỚI ---
    const dsAnhLa = ["images/laphong.png", "images/laphong1.png", "images/laphong2.png"];
    const dsAnhKyNiem = ["images/anh1.png", "images/anh2.png", "images/anh3.png", "images/dichs1.png", "images/dichs2.png", "images/dichs3.png", "images/anh4.png", "images/anh5.png"];

    function createLeaf() {
        if (dsAnhLa.length === 0) return;
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        leaf.innerHTML = `<img src="${dsAnhLa[Math.floor(Math.random() * dsAnhLa.length)]}" alt="leaf">`;
        const size = Math.random() * 20 + 15;
        leaf.style.width = size + 'px';
        leaf.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(leaf);
        leaf.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 0 },
            { opacity: 0.7, offset: 0.1 },
            { transform: `translate(${(Math.random() - 0.5) * 400}px, 110vh) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], { duration: Math.random() * 5000 + 5000, easing: 'ease-in-out' }).onfinish = () => leaf.remove();
    }

    function createPhoto() {
        if (dsAnhKyNiem.length === 0) return;
        const photo = document.createElement('div');
        photo.className = 'photo-leaf';
        photo.innerHTML = `<img src="${dsAnhKyNiem[Math.floor(Math.random() * dsAnhKyNiem.length)]}" alt="photo">`;
        const size = Math.random() * 80 + 120;
        photo.style.width = size + 'px';
        photo.style.height = (size * 1.4) + 'px';
        photo.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(photo);
        photo.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 0 },
{ opacity: 0.9, offset: 0.1 },
{ transform: `translate(${(Math.random() - 0.5) * 600}px, 110vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], { duration: Math.random() * 8000 + 8000, easing: 'ease-in-out' }).onfinish = () => photo.remove();
    }

    setInterval(createLeaf, 250);
    setInterval(createPhoto, 1000);
});
