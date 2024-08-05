package com.example.yumfilm.service;

import com.example.yumfilm.Dto.FilmDetailDto;

import com.example.yumfilm.model.*;
import com.example.yumfilm.repository.*;
import com.example.yumfilm.responses.FilmResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FilmDetailService {
    private final FilmDetailRepository filmDetailRepository;
    private final FilmRepository filmRepository;
    private final CountryRepository countryRepository;
    private final ActorRepository actorRepository;
    private final DirectorRepository directorRepository;
    private final FilmTypeRepository filmTypeRepository;


    public FilmResponse findFilmDetailById(int id) {
        return filmDetailRepository.findFilmDetailById(id);
    }

    public List<FilmResponse> getAllFilmDetailAdmin() {

        return filmDetailRepository.getAllFilmDetailAdmin();
    }

    public Film createFilmDetail(FilmDetailDto filmDetailDto) {
        Film film = convertToEntityFilm(filmDetailDto);
        FilmDetail filmDetail = convertToEntityFilmDetail(filmDetailDto);
        Country country = countryRepository.findById(filmDetailDto.getCountryId()).get();
        Actor actor = convertToEntityActor(filmDetailDto);
        Director director = convertToEntityDirector(filmDetailDto);
        FilmType filmType = convertToEntityFilmType(filmDetailDto);

//        countryRepository.save(country);
        film.setCountry(country);
        filmDetail.setFilm(film);
        filmRepository.save(film);
        filmDetailRepository.save(filmDetail);
        actorRepository.save(actor);
        directorRepository.save(director);
        filmTypeRepository.save(filmType);
        return film;
    }

    private Film convertToEntityFilm(FilmDetailDto filmDetailDto) {
        return Film.builder()
                .filmName(filmDetailDto.getFilmName())
                .filmImage(filmDetailDto.getFilmImage())
                .filmTime(filmDetailDto.getFilmTime())
                .premiereDate(filmDetailDto.getPremiereDate())
                .rate(filmDetailDto.getRate())
                .age(filmDetailDto.getAge())
                .price(filmDetailDto.getPrice())
                .videoTrailer(filmDetailDto.getVideoTrailer())
                .build();
    }

    private FilmDetail convertToEntityFilmDetail(FilmDetailDto filmDetailDto) {
        return FilmDetail.builder()
                .produtionDate(filmDetailDto.getYearProduction())
                .description(filmDetailDto.getDescription())
                .build();
    }


    private Actor convertToEntityActor(FilmDetailDto filmDetailDto) {
        return Actor.builder()
                .actorName(filmDetailDto.getActorName())
                .build();
    }

    private Director convertToEntityDirector(FilmDetailDto filmDetailDto) {
        return Director.builder()
                .directorName(filmDetailDto.getDirectorName())
                .build();
    }

    private FilmType convertToEntityFilmType(FilmDetailDto filmDetailDto) {
        return FilmType.builder()
                .filmTypeName(filmDetailDto.getFilmType())
                .build();
    }

    public FilmDetail updateFilm(FilmDetailDto filmDetailDto) {
        FilmDetail exsitingFilmDetail = filmDetailRepository.findById(filmDetailDto.getFilmId()).get();
        FilmType exsitingType = filmTypeRepository.findByFilmTypeName(filmDetailDto.getFilmType()).get(0);
        Actor exsitingActor = actorRepository.findByActorName(filmDetailDto.getActorName()).get(0);
        Director exsitingDirector = directorRepository.findByDirectorName(filmDetailDto.getDirectorName()).get(0);
        Country exssitingCountry = countryRepository.findById(filmDetailDto.getCountryId()).get();
        exsitingFilmDetail.setFilm(convertToEntityFilm(filmDetailDto));
        exsitingFilmDetail.setProdutionDate(filmDetailDto.getPremiereDate());
        exsitingFilmDetail.setDescription(filmDetailDto.getDescription());
        exsitingType.setFilmTypeName(filmDetailDto.getFilmType());
        exsitingActor.setActorName(filmDetailDto.getActorName());
        exsitingDirector.setDirectorName(filmDetailDto.getDirectorName());

        exsitingFilmDetail.getFilm().setCountry(exssitingCountry);
        filmRepository.save(exsitingFilmDetail.getFilm());
        filmDetailRepository.save(exsitingFilmDetail);
        filmTypeRepository.save(exsitingType);
        actorRepository.save(exsitingActor);
        directorRepository.save(exsitingDirector);
        countryRepository.save(exssitingCountry);

        return exsitingFilmDetail;
    }

    public void deleteFilm(int id){
        filmRepository.deleteById(id);
    }



}
