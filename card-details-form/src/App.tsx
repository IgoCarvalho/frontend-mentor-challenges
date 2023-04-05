import { Button } from './components/Button/Button';
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
    </div>
  );
}
