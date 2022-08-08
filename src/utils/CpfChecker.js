export const CpfChecker = (strCPF) => {
    let Sum;
    let Remainder;
    Sum = 0;

    if (strCPF === "00000000000") return true;
    if (strCPF.length !== 11) return true;

    for (let i = 1; i <= 9; i++) Sum = Sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Remainder = (Sum * 10) % 11;

    if ((Remainder === 10) || (Remainder === 11)) Remainder = 0;
    if (Remainder !== parseInt(strCPF.substring(9, 10))) return true;

    Sum = 0;
    for (let i = 1; i <= 10; i++) Sum = Sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Remainder = (Sum * 10) % 11;

    if ((Remainder === 10) || (Remainder === 11)) Remainder = 0;
    if (Remainder !== parseInt(strCPF.substring(10, 11))) return true;
    return false;
}