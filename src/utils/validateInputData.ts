export const validateInputData = (event: React.ChangeEvent<HTMLInputElement>): string | undefined => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
        case 'amount':
            if (!/^[1-9]\d*$/.test(value) || parseInt(value, 10) <= 0) {
                return 'Сумма кредита должна быть положительным целым числом';
            }
            break;

        case 'months':
            if (!/^[1-9]\d*$/.test(value) || parseInt(value, 10) <= 0) {
                return 'Срок кредита должен быть положительным целым числом';
            }
            break;

        case 'rate':
            if (isNaN(parseFloat(value)) || parseFloat(value) <= 0) {
                return 'Ставка должна быть положительным числом';
            }
            break;

        default:
            break;
    }
};
