<?php
/**
 * Plugin Name: My Gutenberg Block
 */

function my_gutenberg_block_register() {
    wp_register_script(
        'my-gutenberg-block',
        plugins_url( 'index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' )
    );

    register_block_type( 'my-plugin/my-block', array(
        'editor_script' => 'my-gutenberg-block',
    ) );
}
add_action( 'init', 'my_gutenberg_block_register' );