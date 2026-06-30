<?php

namespace App;

use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;
use Symfony\Component\Routing\Loader\AttributeDirectoryLoader;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\Routing\Loader\YamlFileLoader;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;

    protected function configureRoutes($routes): void
    {
        $conf = $this->getProjectDir() . '/config/routes.yaml';
        $routes->import($conf);
    }
}