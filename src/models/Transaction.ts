import { v4 as uuid } from 'uuid';

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({
    title,
    value,
    type,
  }: Omit<Transaction, 'id' | 'isOutcome' | 'isIncome'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }

  public isOutcome(): boolean {
    return this.type === 'outcome';
  }

  public isIncome(): boolean {
    return !this.isOutcome();
  }
}

export default Transaction;
