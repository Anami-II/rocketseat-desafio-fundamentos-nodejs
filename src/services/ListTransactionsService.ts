import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface BalanceDTO {
  income: number;
  outcome: number;
  total: number;
}

interface Response {
  transactions: Array<Transaction>;
  balance: BalanceDTO;
}

class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): Response {
    return {
      transactions: this.transactionsRepository.all(),
      balance: this.transactionsRepository.getBalance(),
    };
  }
}

export default ListTransactionsService;
