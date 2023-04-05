import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import { TextField } from '../../components/TextField/TextField';

import styles from './CardForm.module.scss';

export function CardForm() {
  return (
    <main className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <Card number="959164896389101E" cardholder="Felicia Leire" expiry="0900" cvc="000" />
        </div>
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.formFieldsContainer}>
            <TextField
              name="cardholder-name"
              label="CARDHOLDER NAME"
              placeholder="e.g. Jane Appleseed"
            />

            <TextField
              name="card-number"
              label="CARD NUMBER"
              placeholder="e.g. 1234 5678 9123 0000"
              type="number"
              max={12}
              maxLength={2}
              pattern="/\d{2}/"
            />

            <div className={styles.formGroup}>
              <TextField name="expiry-date" label="EXP. DATE (MM/YY)">
                <div className={styles.dateFieldContainer}>
                  <Input name="expiry-date-month" id="expiry-date" placeholder="MM" />
                  <Input name="expiry-date-year" placeholder="YY" />
                </div>
              </TextField>

              <TextField name="card-cvc" label="CVC" placeholder="e.g. 123" />
            </div>
          </div>

          <div className={styles.formActionsContainer}>
            <Button type="submit">Confirm</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
