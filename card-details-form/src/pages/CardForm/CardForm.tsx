import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import { TextField } from '../../components/TextField/TextField';
import { ThankYou } from '../../components/ThankYou/ThankYou';

import { CardFormFields, cardFormSchema } from './validation';
import styles from './CardForm.module.scss';

export function CardForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CardFormFields>({
    resolver: zodResolver(cardFormSchema),
    defaultValues: {
      cardholderName: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvc: '',
    },
  });

  const [isCompleted, setIsCompleted] = useState(false);

  function onContinue() {
    reset();
    setIsCompleted(false);
  }

  const onFormSubmit: SubmitHandler<CardFormFields> = () => {
    setIsCompleted(true);
  };

  const { cardNumber, cardholderName, cvc, expiryMonth, expiryYear } = watch();

  return (
    <main className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <Card
            number={cardNumber}
            cardholder={cardholderName}
            expiryMont={expiryMonth}
            expiryYear={expiryYear}
            cvc={cvc}
          />
        </div>
      </div>

      <div className={styles.formContainer}>
        {isCompleted && <ThankYou onContinue={onContinue} />}

        {!isCompleted && (
          <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
            <div className={styles.formFieldsContainer}>
              <TextField
                label="CARDHOLDER NAME"
                placeholder="e.g. Jane Appleseed"
                error={errors.cardholderName?.message}
                {...register('cardholderName')}
              />

              <TextField name="card-number" label="CARD NUMBER" error={errors.cardNumber?.message}>
                <Input
                  id="card-number"
                  format="#### #### #### ####"
                  placeholder="e.g. 1234 5678 9123 0000"
                  {...register('cardNumber')}
                  error={!!errors.cardNumber}
                />
              </TextField>

              <div className={styles.formGroup}>
                <TextField
                  name="expiry-date"
                  label="EXP. DATE (MM/YY)"
                  error={errors.expiryMonth?.message || errors.expiryYear?.message}
                >
                  <div className={styles.dateFieldContainer}>
                    <Input
                      id="expiry-date"
                      placeholder="MM"
                      {...register('expiryMonth')}
                      error={!!errors.expiryMonth}
                    />
                    <Input
                      placeholder="YY"
                      {...register('expiryYear')}
                      error={!!errors.expiryYear}
                    />
                  </div>
                </TextField>

                <TextField
                  label="CVC"
                  placeholder="e.g. 123"
                  error={errors.cvc?.message}
                  {...register('cvc')}
                />
              </div>
            </div>

            <div className={styles.formActionsContainer}>
              <Button type="submit">Confirm</Button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
