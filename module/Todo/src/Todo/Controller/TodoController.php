<?php

namespace Todo\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Json\Json;
use Zend\View\Model\ViewModel;

class TodoController extends AbstractActionController {

    public function indexAction() {
        
    }

    public function listAction() {
        $data = array(array("date" => "23/12/2013", "tache" => "congé"), array("date" => "21/12/2013", "tache" => "congé"), array("date" => "21/12/2013", "tache" => "congé"), array("date" => "21/12/2013", "tache" => "congé"));

        echo Json::encode($data);
        exit();
    }

    public function addAction() {
        
    }

    public function editAction() {
        
    }

    public function deleteAction() {
        
    }

}
