<?php

namespace App\Controller;

use App\Entity\Recette;
use App\Repository\CategorieRepository;
use App\Repository\RecetteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(RecetteRepository $recetteRepository, CategorieRepository $categorieRepository): Response
    {
        return $this->render('home/index.html.twig', [
            'recettes' => $recetteRepository->findBy([], ['createdAt' => 'DESC']),
            'categories' => $categorieRepository->findAll(),
        ]);
    }

    #[Route('/recette/{id}', name: 'app_recette_detail')]
    public function detail(Recette $recette): Response
    {
        return $this->render('home/detail.html.twig', [
            'recette' => $recette,
        ]);
    }
}
