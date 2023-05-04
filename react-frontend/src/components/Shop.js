import './Shop.css'
import MultiRangeSlider from './MultiRange'
export default function Shop(){

    return (
        <div>
            <div class="row w-100">
                <div class="col-2 settings-block mx-4" >
                    <div class="">
                        <p class="font-filter-block ml-custom">Filtruj według</p>
                    </div>
                    <div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something"/>
                        <label class="form-check-label" for="check1">Drama</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check2" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Komedia</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check3" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Nauka</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check4" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Biznes</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check5" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Ekonomia</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check6" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Poezja</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check7" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Fantazy</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check8" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Science Fiction</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check9" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Lektury</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check10" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Dla dzieci</label>
                        </div>
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="check11" name="option2" value="something"/>
                        <label class="form-check-label" for="check2">Rozwojowe</label>
                        </div>
                    </div>
                    <div class="mt-2">
                        <p class="font-filter-block ml-custom">Bestsellery</p>
                    </div>
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="check12" name="option2" value="something"/>
                    <label class="form-check-label" for="check2">Bestsellery tego roku</label>
                    </div>
                    <div class="mt-2">
                        <p class="font-filter-block ml-custom">Nowość</p>
                    </div>
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="check13" name="option2" value="something"/>
                    <label class="form-check-label" for="check2">Tak</label>
                    </div>
                    <p class="font-filter-block mt-2 no-margin">Cena</p>
                        <MultiRangeSlider/>
                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    </div>
                    <div class="col-9 ">
                        <div class="mb-3 mt-3">
                            <input type="search" class="form-control" id="search" placeholder="Szukaj w sklepie" name="search"/>
                        </div>
                        <div class="settings-block">

                        </div>
                    </div>
                    </div>
                    
            </div>
    );

}