<?php

/** 
    * Plugin Name: First block
    * Description: I do not know a thing about plugins 
*/

function course_firstblock_init() {
    register_block_type_from_metadata( __DIR__ );
}

add_action( "init", "course_firstblock_init" );