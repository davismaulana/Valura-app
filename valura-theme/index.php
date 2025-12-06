<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php wp_title('|', true, 'right'); ?></title>
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/favicon.png" />
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KG8D80SZEE"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-KG8D80SZEE');
    </script>
    
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <div id="root"></div>
    <?php wp_footer(); ?>
  </body>
</html>
