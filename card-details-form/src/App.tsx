import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { TextField } from './components/TextField/TextField';

export function App() {
  return (
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h1>Hello World</h1>

      <Button>Confirm</Button>

      <TextField
        type="text"
        name="card-number"
        label="CARDHOLDER NAME"
        error="Wrong format"
        placeholder="e.g. Jane Appleseed"
      />

      <Card number="959164896389101E" cardholder="Felicia Leire" expiry="0900" cvc="000" />
    </div>
  );
}
