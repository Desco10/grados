// ==========================================
// DIPLOMA DEL GRADUADO
// Edita SOLO este bloque para cambiar los datos.
// (Opcional: también puedes definir EVENTO.diploma
//  en config.js con las mismas claves; tiene prioridad.)
// ==========================================

(function () {

  "use strict";

  const DIPLOMA = {

    eyebrow: "Orgullo y satisfacción",

    institucion: "Universidad de la Vida",

    titulo: "Diploma de grado",

    nombre: "Carlos Andres Cardona Ledezma",

    texto: "Por haber cumplido con todos los requisitos académicos y culminado satisfactoriamente sus estudios en",

    carrera: "Administracion de Empresas",

    fecha: "24 de octubre de 2026",

    firma1: { nombre: "Alvaro Enriquez", cargo: "Rector" },

    firma2: { nombre: "Juan Manuel Bataclea", cargo: "Decano" }

  };


  const datos = Object.assign(
    {},
    DIPLOMA,
    (typeof EVENTO !== "undefined" && EVENTO.diploma) || {}
  );


  // Escribe texto de forma segura y oculta la línea si está vacía
  function poner(id, texto) {

    const el = document.getElementById(id);

    if (!el) {
      return;
    }

    const valor = String(texto == null ? "" : texto).trim();

    el.textContent = valor;

    el.hidden = valor === "";

  }


  function pintar() {

    poner("diplomaEyebrow", datos.eyebrow);
    poner("diplomaInstitucion", datos.institucion);
    poner("diplomaTitulo", datos.titulo);
    poner("diplomaNombre", datos.nombre);
    poner("diplomaTexto", datos.texto);
    poner("diplomaCarrera", datos.carrera);
    poner("diplomaFecha", datos.fecha);

    const f1 = datos.firma1 || {};
    const f2 = datos.firma2 || {};

    poner("diplomaFirma1Nombre", f1.nombre);
    poner("diplomaFirma1Cargo", f1.cargo);
    poner("diplomaFirma2Nombre", f2.nombre);
    poner("diplomaFirma2Cargo", f2.cargo);

    // Si una firma no tiene datos, se oculta completa
    const b1 = document.getElementById("diplomaFirma1");
    const b2 = document.getElementById("diplomaFirma2");

    if (b1) { b1.hidden = !(f1.nombre || f1.cargo); }
    if (b2) { b2.hidden = !(f2.nombre || f2.cargo); }

  }


  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", pintar);
  } else {
    pintar();
  }

})();