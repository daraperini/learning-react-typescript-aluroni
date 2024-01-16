import classNames from 'classnames';
import styles from './TagsPrato.module.scss';
import { Prato } from 'types/Prato';

export default function TagsPrato({ category, size, serving, price }: Prato) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames(
          styles.tags__tipo,
          styles[`tags__tipo__${category.label.toLowerCase()}`]
        )}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcaop}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>
        Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
