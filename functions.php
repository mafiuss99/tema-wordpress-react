<?php

function theme_scripts() {
    wp_enqueue_style(
        'style-css',
        get_template_directory_uri().'/style.css',
        array(),
        '1.0.0',
        true
    );

    wp_enqueue_script(
        'main',
        get_template_directory_uri().'/dist/main.js',
        array(),
        '1.0.0',
        true
    );
}

add_action( 'wp_enqueue_scripts', 'theme_scripts' );