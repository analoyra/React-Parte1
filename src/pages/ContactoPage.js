import React from "react";

const ContactoPage = (props) => {
  return (
    <main className="holder contacto">
      <div> Contacto</div>
      <form className="formulario" action="" method="">
        <p>
          <label for="nombre">Nombre</label>
          <input type="text" placeholder="ingrese su nombre"></input>
        </p>
        <p>
          <label for="email">Email</label>
          <input type="text" placeholder="ingrese su email"></input>
        </p>
        <p>
          <label for="telefono">Telefono</label>
          <input type="text" placeholder="ingrese su telefono"></input>
        </p>
        <p>
          <label for="mensaje">Nombre</label>
          <textarea></textarea>
        </p>
        <p className="acciones">
          <input type="submit" value="Enviar" />
        </p>
      </form>
      <div className="datos">
        <h2>otras vias de comunicacion</h2>
        <p> Podes escribir por los siguientes medios de comunicacion</p>
        <ul>
            <li> telefono:11111</li>
            <li> email:aloyra@gmail.com</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
