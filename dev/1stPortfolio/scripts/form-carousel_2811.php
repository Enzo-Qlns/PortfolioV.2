<?php

require_once('FormProcessor.php');

$form = array(
    'subject' => 'Nouveau message !',
    'email_message' => 'Vous avez un nouveau message !',
    'success_redirect' => '',
    'sendIpAddress' => true,
    'email' => array(
    'from' => 'contact@enzoquelenis.com',
    'to' => 'enzoquelenis@gmail.com'
    ),
    'fields' => array(
    'name' => array(
    'order' => 1,
    'type' => 'string',
    'label' => 'Name',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Name\' is required.'
    )
    ),
    'email' => array(
    'order' => 2,
    'type' => 'email',
    'label' => 'Email',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Email\' is required.'
    )
    ),
    'message' => array(
    'order' => 3,
    'type' => 'string',
    'label' => 'Message',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Message\' is required.'
    )
    ),
    'agree' => array(
    'order' => 4,
    'type' => 'checkbox',
    'label' => 'J&#39;accepte les Conditions d&#39;utilisation',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'J&#39;accepte les Conditions d&#39;utilisation\' is required.'
    )
    ),
    )
    );

    $processor = new FormProcessor('');
    $processor->process($form);

    ?>