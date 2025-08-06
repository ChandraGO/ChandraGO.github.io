// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Apakah kamu mau memutar musik di latar belakang?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Iya',
        cancelButtonText: 'Tidak',
         allowOutsideClick: false // <- Tambahan ini
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "8deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-8deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.4, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 0.5
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=1.5")
    .to(".two",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=1.5")
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(
        ".hbd-chatbox span",
        1.5, {
            visibility: "visible",
        },
        0.05
    )
    .to(".fake-btn", 0.01, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=1.5")
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -100
        },
    "+=0.5")
    .from(".idea-1", 0.60, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=0.7")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=0.7")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=0.7")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=0.7")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=0.7"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=0.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=1"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=0.7"
    )
    
.staggerFromTo(
    ".baloons img",  // Animasi untuk balon dan tali
    1.5, {
        opacity: 0.9,
        y: window.innerHeight,  // Mulai dari bawah layar
    }, {
        opacity: 1,
        y: -1.5 * window.innerHeight,  // Gerakkan lebih jauh ke atas untuk memastikan keluar dari layar
    },
    0.2
)



    .from(
        ".profile-picture",
        0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(
        ".wish-hbd span",
        0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
    )
    .staggerFromTo(
        ".wish-hbd span",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
    )
   .staggerTo(
    ".eight svg",
    0.8, {
        visibility: "visible",
        opacity: 0,
        scale: 50,
        repeat: 1,
        repeatDelay: 0.5,
    },
    0.1
)

    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 0.6)
   
    

.add(() => {
  document.querySelector(".final-buttonvid").style.display = "block"; // Tampilkan hanya tombol video dulu
})



    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"  
    )

async function tanya_v1() {
  const { value: kado } = await Swal.fire({
    title: "Pastikan yang buka ini Sayangnya Akuuu",
    input: "text",
    inputPlaceholder: "Tulis jawaban kamu di sini",
    confirmButtonText: "Kirim ke WA aku",
    showCancelButton: false,
  });
  if (kado) {
    await Swal.fire("Kirim jawabannya ke wa aku ya 😍");
    window.open("https://wa.me/6282252509320?text=" + encodeURIComponent(kado));
  } else {
    await Swal.fire("Jangan dikosongin dong 😭");
    tanya();
  }
}

// Menampilkan tombol di akhir animasi

}

function showLovePrompt() {
  const popup = document.getElementById("prompt-wrapper");
  if (popup) popup.style.display = "flex";
}

async function tanya() {
  const { value: kado } = await Swal.fire({
    title: "Pastikan yang buka ini Sayangnya Akuuu",
    input: "text",
    inputPlaceholder: "Tulis jawaban kamu di sini",
    confirmButtonText: "Kirim ke WA aku",
    showCancelButton: false,
  });
  if (kado) {
    await Swal.fire("Kirim jawabannya ke wa aku ya 😍");
    window.open("https://wa.me/6282252509320?text=" + encodeURIComponent(kado));
  } else {
    await Swal.fire("Jangan dikosongin dong 😭");
    tanya();
  }
}

async function tanya() {
  const { value: kado } = await Swal.fire({
    title: 'Kasih Pantun dulu 🗿',
    html: '<img src="./img/sticker.gif" style="width:100px;margin:10px auto;display:block;" /><input type="text" id="pantun" class="swal2-input" placeholder="Tulis jawaban kamu di sini">',
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Kirim jawabannya ke wa aku ya 🗿',
    cancelButtonText: 'Ok tidak',
    preConfirm: () => {
      return document.getElementById('pantun').value;
    }
  });

  if (kado) {
    if (kado.dismiss === Swal.DismissReason.cancel) {
      const container = document.createElement('div');
      container.innerHTML = `
        <p style="font-size:1.2rem;">Kirim jawabannya ke wa aku ya 🗿</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
          <button onclick="confirmYa(1)">ya</button>
          <button onclick="confirmYa(2)">ya</button>
          <button onclick="confirmYa(3)">ya</button>
          <button onclick="confirmYa(4)">ya</button>
          <button onclick="confirmYa(5)">ya</button>
        </div>
        <img src="./IMG/konfir.gif" style="width:100px;margin-top:15px;" />
      `;
      Swal.fire({
        html: container,
        showConfirmButton: false
      });
    } else {
      window.open("https://wa.me/6282252509320?text=" + encodeURIComponent(kado));
    }
  }
}




async function tanya() {
  const { value: jawaban, isConfirmed, isDismissed } = await Swal.fire({
    title: 'Kasih Pantuunu dulu 🗿',
    html: '<img src="./img/sticker.gif" style="width:100px;margin:10px auto;display:block;" />' +
          '<input type="text" id="pantun" class="swal2-input" placeholder="Tulis jawaban kamu di sini">',
    showCancelButton: true,
    confirmButtonText: 'ya',
    cancelButtonText: 'tidak',
    cancelButtonColor: '#e74c3c',
    focusConfirm: false,
    preConfirm: () => document.getElementById('pantun').value
  });

  if (isConfirmed) {
    const value = jawaban || 'Aku jawab ya 🗿';
    window.open("https://wa.me/6282252509320?text=" + encodeURIComponent(value));
  } else if (isDismissed) {
    Swal.fire({
      title: "Hmmm. Wajib Kirim",
      text: "hidup adalah pilihan, silahkan pilih tombol di bawah",
      html:
        '<p style="font-size:1rem;margin-bottom:1rem;">Hmmm. Wajib Kirim 😈</p>' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">' +
        Array.from({ length: 5 }, (_, i) => `<button onclick="confirmYa(${i})" class="swal2-confirm swal2-styled">ya</button>`).join('') +
        '</div>' +
        '<img src="./IMG/konfir.gif" style="width:100px;margin-top:20px;" />',
      showConfirmButton: false,
    });
  }
}

async function tanya() {
  const { value: jawaban, isConfirmed, isDismissed } = await Swal.fire({
    title: 'Kasih Pantuunu dulu 🗿',
    html: '<img src="./img/sticker.gif" style="width:100px;margin:10px auto;display:block;" />' +
          '<input type="text" id="pantun" class="swal2-input" placeholder="Tulis jawaban kamu di sini">',
    showCancelButton: true,
    confirmButtonText: 'ya',
    cancelButtonText: 'tidak',
    cancelButtonColor: '#e74c3c',
    focusConfirm: false,
    preConfirm: () => {
      const val = document.getElementById('pantun').value;
      if (!val) {
        Swal.showValidationMessage('Wajib diisi broooooow🥺');
      }
      return val;
    }
  });

  if (isConfirmed && jawaban) {
    window.open("https://wa.me/6282252509320?text=" + encodeURIComponent(jawaban));
  } else if (isDismissed) {
    Swal.fire({
      title: "Lah gak mau kirim? Buruan isiiiiiii 😈",
      html:
        '<input type="text" id="pantun-force" class="swal2-input" placeholder="Tulis jawaban kamu di sini">' +
        '<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:10px;">' +
        Array.from({ length: 5 }, (_, i) => `<button onclick="confirmYaForced(${i})" class="swal2-confirm swal2-styled">ya</button>`).join('') +
        '</div>' +
        '<img src="./IMG/konfir.gif" style="width:100px;margin-top:20px;" />',
      showConfirmButton: false,
    });
  }
}

function confirmYaForced(i) {
  const pantun = document.getElementById('pantun-force')?.value;
  if (!pantun) {
    Swal.showValidationMessage('Harus diisi Wehh 😭');
    return;
  }
  window.open("https://wa.me/6282252509320?text=" + encodeURIComponent(pantun));
}