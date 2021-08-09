<?php

/*
El truco esta en no usar el constructor para crear instancias
*/

class DBMock{

    private static $instance;

    protected function __construct(){
    }

    public static function getInstance(){
        if (static::$instance === null){
            var_dump('Creando nueva instancia');
            static::$instance = new static();
        }
        return static::$instance;
    }

    // Al hacerla privada ya no se tiene acceso
    private function __clone(){}

}


class DBEngine extends DBMock{


}

$instanceDBMock = DBMock::getInstance();
var_dump($instanceDBMock === DBMock::getInstance());

// No tiene acceso al metodo estatico
// $instanceDBEngine = DBEngine::getInstance();
// var_dump($instanceDBMock === $instanceDBEngine);
