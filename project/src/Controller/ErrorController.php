<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class ErrorController extends AbstractController
{
    #[Route('/error/404', name: 'error_404')]
    public function show404(Environment $twig): Response
    {
        return new Response(
            $twig->render('errors/404.html.twig'),
            404
        );
    }
}