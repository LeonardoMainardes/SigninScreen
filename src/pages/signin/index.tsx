import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import card from "../../assets/Card game-rafiki.svg";
import camping from "../../assets/Camping-rafiki.svg";
import hide from "../../assets/Hide and seek game-rafiki.svg";
import scope from "../../assets/Scope-rafiki.svg";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <>
      <main className="w-full h-screen flex">
        <div className="bg-secondary w-full h-full flex p-16 items-center justify-center">
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              <CarouselItem>
                <div className="flex aspect-square rounded p-2 bg-white">
                  <img src={card} alt="Card" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-square rounded p-2 bg-white">
                  <img src={camping} alt="Camping" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-square rounded p-2 bg-white">
                  <img src={hide} alt="Hide" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-square rounded p-2 bg-white">
                  <img src={scope} alt="Scope" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <section className="flex bg-background h-full max-w-3xl w-full p-4 items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter">
                Connectez-vous avec votre compte
              </CardTitle>
              <CardDescription>
                Connectez-vous avec votre compte pour accéder au panneau
                decontrôle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Entrez votre email"
                />
              </div>
              <div className="mt-4">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Entrez votre mot de passe"
                />
              </div>
              <Link to="/home">
                <Button className="mt-6 w-full">Entrer</Button>
              </Link>
              <div className="flex items-center gap-6 mt-4">
                <Separator />
                <span className="text-xs text-muted-foreground">OU</span>
                <Separator />
              </div>
              <Link to="/home">
                <Button variant="outline" className="mt-4 w-full">
                  <GitHubLogoIcon className="mr-2" />
                  Entrer avec GitHub
                </Button>
              </Link>
            </CardContent>
            <CardFooter>
              <p className="text-muted-foreground text-center text-sm">
                En accédant à la plateforme, vous acceptez nos Conditions
                D'utilisation et Politique de Confidentialité
              </p>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  );
}
