<?php
/*
Define una familia de algoritmos y hace que sean intercambiables el comportamiento
*/

interface OutputInterface{
    public function load();
}

class ArrayOutput implements OutputInterface{

    private $dataArray;

    public function __construct($dataArray){
        $this->dataArray = $dataArray;
    }

    public function load(){
        return  $this->dataArray;
    }
}

class JsonOutput implements OutputInterface{

    private $dataArray;

    public function __construct($dataArray){
        $this->dataArray = $dataArray;
    }

  public function load(){
        return json_encode($this->dataArray);
    }
}

class Client{

    private $output;

    public function setOutput(OutputInterface $outPutType){
        $this->output = $outPutType;
    }

    public function loadOutput(){
        return $this->output->load();
    }

}


$data = ['name' => 'Gustavo ','age' => 25];

$clientArray = new Client();
$clientArray->setOutput(new ArrayOutput($data));
var_dump($clientArray->loadOutput());


$clientJson = new Client();
$clientJson->setOutput(new JsonOutput($data));
var_dump($clientJson->loadOutput());
