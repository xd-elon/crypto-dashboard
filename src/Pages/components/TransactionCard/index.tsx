import { AiOutlineRight } from "react-icons/ai";
import { TransactionCard } from "./style";

interface ITransactionProps {
  Title: string;
  color?: string;
  valueInitials?: string;
  value?: number;
  amountInitials?: string;
  amount?: number;
}

export function TransactionnCard({
  Title, 
  color, 
  valueInitials, 
  value, 
  amountInitials, 
  amount
}: ITransactionProps) {
  return (
    <TransactionCard style={ color === undefined 
        ? {borderColor: 'red'} 
        : {borderColor: `${color}`}}>
      <div className="textTransactionBox">
        <div className="titleTransaction">
          <span>{Title}</span>
        </div>
        <div className="valuesTransactionBox">
          <div>
            <span>{`${value} ${valueInitials}`}</span>
          </div>
          <div>
            <span>{`${amount} ${amountInitials}`}</span>
          </div>
        </div>
      </div>
      <div className="transactionButton">
        <AiOutlineRight />
      </div>
    </TransactionCard>
  )
}