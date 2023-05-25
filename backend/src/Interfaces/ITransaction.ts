interface ITransaction {
  id?: string,
  payingUserId: string,
  payingUserName?: string,
  receivingUserId: string,
  receivingUserName?: string,
  amountPaid: number,
  description?: string
}

export default ITransaction;