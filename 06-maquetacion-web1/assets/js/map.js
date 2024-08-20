document.addEventListener("DOMContentLoaded",(e)=>{

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe  class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginWidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16365.779931825937!2d-5.67865233859115!3d43.52134734695801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd367c66cbf494bf%3A0xbd06d207048d3536!2sGij%C3%B3n%2C%20Asturias!5e0!3m2!1sen!2ses!4v1713287435763!5m2!1sen!2ses"></iframe>
        `;
    },500)

});