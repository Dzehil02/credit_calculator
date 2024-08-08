export const validateInputData = (event: React.ChangeEvent<HTMLInputElement>): string | undefined => {
    switch (event.target.name) {
        case 'amount': 
            if (isNaN(+event.target.value) || +event.target.value <= 0) {
                return 'Сумма кредита должна быть положительным числом';
            }
            break;
    
        case 'months':
            if (isNaN(+event.target.value) || +event.target.value <= 0) {
                return 'Срок кредита должен быть положительным числом';
            }
            break;
    
        case 'rate':
            if (isNaN(+event.target.value) || +event.target.value <= 0) {
                return 'Ставка должна быть положительным числом';
            }
            break;
        default:
            break;
    }
}