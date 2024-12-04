import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import card from "../../assets/Card game-rafiki.svg";
import camping from "../../assets/Camping-rafiki.svg";
import hide from "../../assets/Hide and seek game-rafiki.svg";
import scope from "../../assets/Scope-rafiki.svg"

export function SignIn() {
  return (
    <>
      <main className="w-full h-screen flex">
        <div className="bg-secondary w-full h-full flex p-16 items-center justify-center">
            <Carousel className="w-full max-w-xl" >
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex aspect-square rounded p-8">
                            <img src={card} alt="Card" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex aspect-square rounded p-8">
                            <img src={camping} alt="Camping" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex aspect-square rounded p-8">
                            <img src={hide} alt="Hide" />
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex aspect-square rounded p-8">
                            <img src={scope} alt="Scope" />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
        <section className="flex bg-background h-full max-w-3xl w-full p-4 items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold tracking-tighter">Entre com sua conta</CardTitle>
                    <CardDescription>Entre com sua conta para acessar o painel de controle</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="Digite seu email" />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" placeholder="Digite sua senha" />
                    </div>
                    <Button className="mt-6 w-full">Entrar</Button>
                    <div className="flex items-center gap-6 mt-4">
                        <Separator/>
                        <span className="text-xs text-muted-foreground">OU</span>
                        <Separator/>
                    </div>
                    <Button variant='outline' className="mt-4 w-full"><GitHubLogoIcon className="mr-2"/>Entrar com GitHub</Button>
                </CardContent>
                <CardFooter>
                    <p className="text-muted-foreground text-center text-sm">Ao entrar na plataforma, você concorda com nossos Termos de Uso e Política de Privacidade</p>
                </CardFooter>
            </Card>
        </section> 
      </main>
    </>
  );
}
