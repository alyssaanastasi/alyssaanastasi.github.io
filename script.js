document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.getElementById("profile-pic");
    
    let scale = 1;
    let growing = true;

    function animateProfilePic() {
        if (growing) {
            scale += 0.01;
            if (scale >= 1.1) {
                growing = false;
            }
        } else {
            scale -= 0.01;
            if (scale <= 1) {
                growing = true;
            }
        }

        profilePic.style.transform = `scale(${scale})`;

        requestAnimationFrame(animateProfilePic);
    }

    animateProfilePic();
});
