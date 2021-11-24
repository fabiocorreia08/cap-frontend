export class Grupo{   
    	
	public idGrupo!: number;	
	public equipamento!: string;
	public grupoPai!: string;
	public codigoSequencia!: string;	
	public subgrupos: string[] = [];
	public descricaoGrupo!: string;
	public flagMecanico!: string;
	public flagEletricista!: string;
	public flagEletronico!: string;
	public flagTI!: string;
	public flagUtilidades!: string;
	public flagEngenharia!: string;
	public flagPreventiva!: string;
	public descricaoObservacao!: string;

}