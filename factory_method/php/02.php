<?php

/*
Ayuda cuando la construccion de un objeto es Compleja, y que atraves de otra clase
se delegue la responsabilidad de ensamblar el metodo
*/

class Computer{

    public $ram;
    public $hard_driver;
    public $monitor;

    public function __construct(Ram $ram, HardDrive $hard_driver, Monitor $monitor){
        $this->ram = $ram;
        $this->hard_driver = $hard_driver;
        $this->monitor = $monitor;
    }

    public function printResources(){
        var_dump($this->ram);
        var_dump($this->hard_driver);
        var_dump($this->monitor);
    }

}

class Ram{

    private $size;
    public function __construct($size){
        $this->size = $size;
    }

}

class HardDrive{

    private $size;
    public function __construct($size){
        $this->size = $size;
    }

}

class Monitor{

    private $size;
    public function __construct($size){
        $this->size = $size;
    }

}

// Llamado convencional sin utilizar
$myComputerNormal = new Computer(new Ram(32), new HardDrive(1000), new Monitor(27));
$myComputerNormal->printResources();

// Usando patro factory method
class ComputerFactory{


    public function create($ram, $hard_driver, $monitor){
        $ram = new Ram($ram);
        $hard_driver = new HardDrive($hard_driver);
        $monitor = new Monitor($monitor);

        return new Computer($ram, $hard_driver, $monitor);
    }
}

$myComputerPattern = ComputerFactory::create(12, 500, 28);
$myComputerPattern->printResources();
