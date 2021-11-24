import { FuncionamentoMaquinaDia } from "../../funcionamento-maquina-dia/model/funcionamento-maquina-dia.model";

export class FuncionamentoMaquina{
   

    public id!: number;
    public idEquipamento!: number;
    public codigoCentroCusto!: number;
    public quantidadeHorasPadrao!: number;
    public ano!: number;
    public mes!: number;
    public codigoUsuario!: string;
    public dataUltimaAlteracao!: string;
    public timestamp!: Date;
    public diasFuncionamento: FuncionamentoMaquinaDia[] = [];


}