export class GrupoDTO{
	idGrupo!: number;
	idGrupoPai!: number;
	idEquipamento!: number;
	codigoSequencia!: string;
	codigoSequenciaPai!: string;
	descricaoGrupo!: string;
	flagMecanico!: string;
	flagEletricista!: string;
	flagEletronico!: string;
	flagTI!: string;
	flagUtilidades!: string;
	flagEngenharia!: string;
	flagPreventiva!: string;
	flagPreventivaAnterior!: string;
    descricaoObservacao!: string;
	areaApoio!: string;
	replicar!: boolean;
	subgrupos!: GrupoDTO[];
}
