/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '1. Introducción',
      className:'sidebars-intro',
      collapsible: true,
      collapsed: false,
      items: [
        'introduccion/1.1-que-es-gestor',
        'introduccion/1.2-beneficios',
      ],
    },
    {
      type: 'category',
      label: '2. Tipos de gestores',
      className:'sidebars-tipos-gestores',
      collapsible: true,
      collapsed: true,
      items: [
        'tipos-gestores/2.1-comerciales-vs-codigo-abierto',
        'tipos-gestores/2.2-autohospedados-vs-nube',
      ],
    },
    {
      type: 'category',
      label: '3. Selección de herramienta',
      className:'sidebars-selec-herramienta',
      collapsible: true,
      collapsed: true,
      items: [
        'seleccion-herramienta/3.1-criterios-seleccion',
        'seleccion-herramienta/3.2-comparativa-soluciones-populares',
      ],
    },
    {
      type: 'category',
      label: '4. Arquitectura y requisitos',
      className:'sidebars-arqui-requi',
      collapsible: true,
      collapsed: true,
      items: [
        'arquitectura-requisitos/4.1-requisitos-hardware-software',
        'arquitectura-requisitos/4.2-componentes-arquitectura',
      ],
    },
    {
      type: 'category',
      label: '5. Instalación y despliegue',
      className:'sidebars-instala-despliegue',
      collapsible: true,
      collapsed: true,
      items: [
        'instalacion-despliegue/5.1-instalacion-bitwarden',
        'instalacion-despliegue/5.2-instalacion-keepass',
      ],
    },
    {
      type: 'category',
      label: '6. Configuración y personalización',
      className:'sidebars-config-person',
      collapsible: true,
      collapsed: true,
      items: [
        'configuracion-personalizacion/6.1-contraseña-maestra-segura',
        'configuracion-personalizacion/6.2-mfa-politicas-bloqueo',
      ],
    },
    {
      type: 'category',
      label: '7. Integración y uso práctico',
      className:'sidebars-integra-practico',
      collapsible: true,
      collapsed: true,
      items: [
        'integracion-uso-practico/7.1-extensiones-navegador',
        'integracion-uso-practico/7.2-cli',
      ],
    },
    {
      type: 'category',
      label: '8. Mantenimiento y respaldos',
      className:'sidebars-manteni-respaldos',
      collapsible: true,
      collapsed: true,
      items: [
        'mantenimiento-respaldos/8.1-actualizaciones-parches',
        'mantenimiento-respaldos/8.2-copias-seguridad',
      ],
    },
    {
      type: 'category',
      label: '9. Buenas prácticas de seguridad',
      className:'sidebars-practicas-seguridad',
      collapsible: true,
      collapsed: true,
      items: [
        'buenas-practicas-seguridad/9.1-cifrado-almacenamiento',
        'buenas-practicas-seguridad/9.2-monitoreo-auditorias',
      ],
    },
    {
      type: 'category',
      label: '10. Formación y adopción',
      className:'sidebars-forma-adopcion',
      collapsible: true,
      collapsed: true,
      items: [
        'formacion-adopcion/10.1-plan-capacitacion',
        'formacion-adopcion/10.2-concienciacion-soporte',
      ],
    },
    {
      type: 'category',
      label: '11. Conclusiones y recursos',
      className:'sidebars-conclusi-recursos',
      collapsible: true,
      collapsed: true,
      items: [
        'conclusiones-recursos/11.1-documentacion-oficial',
        'conclusiones-recursos/11.2-comunidades-contribuciones',
      ],
    },
  ],
};

module.exports = sidebars;
