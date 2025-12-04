<?php
function valura_lms_scripts() {
    $theme_uri = get_template_directory_uri();

    // Enqueue Main Stylesheet (style.css) which now contains the app styles
    wp_enqueue_style('valura-lms-style', get_stylesheet_uri(), array(), '1.0');

    // Enqueue JS
    // Using the specific hash found in the build
    wp_enqueue_script('valura-lms-script', $theme_uri . '/assets/index-D0JqCuBZ.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'valura_lms_scripts');

// Add type="module" to the script tag
function valura_lms_add_module_type($tag, $handle, $src) {
    if ('valura-lms-script' !== $handle) {
        return $tag;
    }
    return '<script type="module" src="' . esc_url($src) . '"></script>';
}
add_filter('script_loader_tag', 'valura_lms_add_module_type', 10, 3);
?>
