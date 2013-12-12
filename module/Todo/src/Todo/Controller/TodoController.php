<?php

namespace Todo\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Json\Json;
use Zend\Db\ResultSet\ResultSet;

class TodoController extends AbstractActionController {

    protected $todoTable;

    public function indexAction() {
        
    }

    public function getTodoTable() {
        if (!$this->todoTable) {
            $sm = $this->getServiceLocator();
            $this->todoTable = $sm->get('Todo\Model\TodoTable');
        }
        return $this->todoTable;
    }

    public function listAction() {
//        $data = array(array("date" => "23/12/2013", "tache" => "congé"), array("date" => "21/12/2013", "tache" => "congé"), array("date" => "21/12/2013", "tache" => "congé"), array("date" => "21/12/2013", "tache" => "congé"));
        try {
            $result = $this->getTodoTable()->fetchAll();
            $data = array();
            foreach ($result as $row)
                array_push($data, $row);


            echo Json::encode($data);
            exit();
        } catch (\Exception $e) {
            echo "Récupère exception: " . get_class($e) . "\n";
            echo "Message: " . $e->getMessage() . "\n";
            exit();
        }
    }

    public function addAction() {
        
    }

    public function editAction() {
        
    }

    public function deleteAction() {
        
    }

}
