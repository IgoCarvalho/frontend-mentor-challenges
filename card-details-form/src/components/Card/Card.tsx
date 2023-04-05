import { CardLogo } from '../icons/CardLogo';

import styles from './Card.module.scss';

type CardProps = {
  number: string;
  cvc: string;
  cardholder: string;
  expiryMont: string;
  expiryYear: string;
};

export function Card({ number, cardholder, cvc, expiryMont, expiryYear }: CardProps) {
  function formatCardNumber() {
    const filledNumber = number.padEnd(16, '•');

    const cardNumberDigits = 16;
    const cardNumberSpaces = 3;
    const cardNumberSize = cardNumberDigits + cardNumberSpaces;

    const numberFormatted = filledNumber
      .replace(/(.{4})/g, (code) => code.concat(' '))
      .trim()
      .slice(0, cardNumberSize);

    return numberFormatted;
  }

  function formatExpiryDate() {
    const filledMonth = expiryMont.padEnd(2, '•').slice(0, 2);
    const filledYear = expiryYear.padEnd(2, '•').slice(0, 2);

    const filledDate = `${filledMonth}${filledYear}`;

    const dateFormatted = filledDate.replace(/(.{2})/, (date) => date.concat('/')).trim();

    return dateFormatted;
  }

  function formatCvc() {
    const filledCode = cvc.padEnd(3, '•').slice(0, 3);

    return filledCode;
  }

  const cardNumber = formatCardNumber();
  const expiryDate = formatExpiryDate();
  const cardCvc = formatCvc();

  return (
    <div className={styles.container}>
      <div className={styles.frontCardContainer}>
        <div className={styles.frontCardHeader}>
          <CardLogo />
        </div>
        <div className={styles.frontCardInfo}>
          <p className={styles.cardNumber}>{cardNumber}</p>

          <p className={styles.cardholderName}>{cardholder ? cardholder : 'Your name here'}</p>
          <span className={styles.cardExpireDate}>{expiryDate}</span>
        </div>
      </div>

      <div className={styles.backCardContainer}>
        <p className={styles.cardCvc}>{cardCvc}</p>
      </div>
    </div>
  );
}
