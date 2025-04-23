import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Protección Centralizada',
    image: require('@site/static/img/imagenOne.png').default,
    description: (
      <>
        Un gestor de contraseñas permite guardar todas tus credenciales de forma segura en un solo lugar, reduciendo el riesgo de olvidarlas o perderlas.
      </>
    ),
  },
  {
    title: 'Acceso Seguro y Rápido',
    image: require('@site/static/img/imagenTwo.png').default,
    description: (
      <>
        Con una sola contraseña maestra puedes acceder a todas tus cuentas de manera rápida y segura, incluso desde diferentes dispositivos.
      </>
    ),
  },
  {
    title: 'Generación de Contraseñas Fuertes',
    image: require('@site/static/img/imagenThree.png').default,
    description: (
      <>
        Estos gestores pueden crear contraseñas robustas automáticamente, mejorando la seguridad de tus cuentas frente a ataques.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={image}
          alt={title}
          className={styles.featureImg}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}