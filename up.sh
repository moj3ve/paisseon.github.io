#!/usr/bin/env bash
cd "$(dirname "$0")" || exit
wget -q -nc https://apt.procurs.us/apt-ftparchive
sudo chmod 751 ./apt-ftparchive
rm {Packages{,.xz,.gz,.bz2,.zst},Release{,.gpg}} 2> /dev/null    
./apt-ftparchive packages ./debians > Packages
gzip -c9 Packages > Packages.gz
xz -c9 Packages > Packages.xz
zstd -c19 Packages > Packages.zst
bzip2 -c9 Packages > Packages.bz2    
./apt-ftparchive release -c ./assets/repo/repo.conf . > Release    
echo "Update successful, kashira."