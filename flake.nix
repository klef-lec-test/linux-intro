{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
  };
  outputs = inputs: let
    pkgs = import inputs.nixpkgs {
      system = "x86_64-linux";
    };
  in {
    devShells."x86_64-linux".default = pkgs.mkShell {
      buildInputs = with pkgs; [
        git
        nodejs_22
        neovim
        pnpm
        gh
        nano
        eza
      ];
    };
  };
}
