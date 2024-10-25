function submit() {
    // alert(`Message Sent! <br> `)
    Swal.fire({
        position: "top",
        icon: "success",
        // titleText: "ola",
        title: "Thanks for completing the form. We'll be in touch soon!",
        showConfirmButton: false,
        timer: 1500,  
      });
}

submit()